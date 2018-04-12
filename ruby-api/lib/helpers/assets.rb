module FarandulaSample
  class Assets
    def self.load_file(file_name)
      File.read( File.dirname(__FILE__) + '/../../assets/' + file_name  )
    end
  end
end
