.PHONY: title
title:
	@echo '#############################'
	@echo '#                           #'
	@echo '#     commands of spica     #'
	@echo '#                           #'
	@echo '#############################'
	@echo ''
	@echo 'run_gulp : 開発環境用にgulpを起動します'
	@echo ''

.PHONY: run_gulp
run_gulp:
	@echo '############################'
	@echo '# 開発用にgulpを起動します #'
	@echo '############################'
	cd gulp; npm run serve;
