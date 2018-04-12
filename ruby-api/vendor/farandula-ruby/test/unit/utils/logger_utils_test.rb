require 'test_helper'
require 'file_helper'
require 'string_helper'
require 'minitest/autorun'
require 'farandula/utils/logger_utils'

class Farandula::LoggerUtilsTest < Minitest::Test

  include Farandula::Utils

  def test_logger_prettyjson
    pretty_json = LoggerUtils.get_pretty_json('{"b":42.005,"a":[42,17],"longer":true,"str":"yes please"}')
    assert pretty_json == '{'+"\n"+
                            '  "b": 42.005,'+"\n"+
                            '  "a": ['+"\n"+
                            '    42,'+"\n"+
                            '    17'+"\n"+
                            '  ],'+"\n"+
                            '  "longer": true,'+"\n"+
                            '  "str": "yes please"'+"\n"+
                            '}'
  end
  

end
