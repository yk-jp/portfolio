dev:  # _config.yml won't be watched for hot relading
	bundle exec jekyll serve --livereload --config _config.yml,_config-dev.yml