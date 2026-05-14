#!/usr/bin/env bash
# Scan job pages for verified email addresses

SKIP_PATTERN="(noreply|no-reply|do-not-reply|info@|hello@|sales@|support@|press@|media@|legal@|privacy@|security@|abuse@|admin@|webmaster@|postmaster@|marketing@|partnerships|partners@|customerservice|cs@|help@|feedback@|billing@|finance@|accounts@|wordpress|sentry|datadog|google|gmail|example|domain|test@|user@|name@|email@|youremail|your\\.email|gdpr@|dpo@|compliance@|john\\.doe|jane\\.doe|firstname|lastname|placeholder|recruiter@|atlasrecruiting|@2x|@3x|\\.(png|jpg|jpeg|gif|svg|webp|ico|css|js|woff|ttf))"

count=0
while IFS= read -r line; do
  name="${line%%|||*}"
  rest="${line#*|||}"
  jobpage="${rest%%|||*}"

  [ -z "$jobpage" ] && continue
  [[ "$jobpage" != http* ]] && continue

  emails=$(curl -sL --max-time 8 "$jobpage" 2>/dev/null \
    | tr '[:upper:]' '[:lower:]' \
    | grep -oiE '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}\b' \
    | sort -u \
    | grep -iEv "$SKIP_PATTERN" \
    | head -3)

  if [ -n "$emails" ]; then
    primary=$(echo "$emails" | head -1)
    echo "${name}|||${primary}"
  fi

  count=$((count + 1))
  sleep 0.3
done < scan_targets.txt

echo "Scanned: $count" >&2
