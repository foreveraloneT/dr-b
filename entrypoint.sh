#!/bin/sh

render_template() {
  eval "echo \"$(cat $1)\""
}

prd_version=${PRD_VERS:-"alpha"}
host=${METRICS_HOST:-"http://api.dev.dotography.net"}

render_template global_config_template.temp > public/static/config/global-config.js

exec "$@"
