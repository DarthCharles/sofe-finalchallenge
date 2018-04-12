$LOAD_PATH.unshift File.expand_path('../lib/**/*', __FILE__)

require 'farandula'

require 'minitest/autorun'
require 'minitest/unit'
require 'minitest/pride'
require "minitest/reporters"


Minitest::Reporters.use! Minitest::Reporters::SpecReporter.new



def assert_raises_with_message(err, err_msg, msg = nil)
  e = assert_raises(err, msg) { yield }
  if err_msg != e.message
    flunk message(msg) {
      diff_message = diff err_msg, e.message
      "#{e.class} raised with unexpected message\n#{diff_message}"
    }
  end
end