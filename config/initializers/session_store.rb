Rails.application.config.session_store :cookie_store, {
  :key => 'Ruff_House',
  :domain => :all,
  :same_site => :none,
  :secure => :true,
  :tld_length => 2
}