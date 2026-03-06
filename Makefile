.DEFAULT_GOAL := help

.PHONY: help dev build preview test test-watch lint typecheck clean install

help: ## Show this help message
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2}'

install: ## Install dependencies
	npm install

dev: ## Start the dev server
	npx vite

build: ## Type-check and build for production
	npx tsc -b && npx vite build

preview: ## Preview the production build locally
	npx vite preview

test: ## Run all tests once
	npx vitest run

test-watch: ## Run tests in watch mode
	npx vitest

lint: ## Run ESLint
	npx eslint .

typecheck: ## Run TypeScript type-checking only
	npx tsc --noEmit

clean: ## Remove build output and node_modules
	rm -rf dist node_modules
