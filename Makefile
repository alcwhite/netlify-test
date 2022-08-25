​production:
    middleman contentful && middleman build
​
deploy_preview:
    middleman contentful && middleman build && cp netlify_headers _site/_headers