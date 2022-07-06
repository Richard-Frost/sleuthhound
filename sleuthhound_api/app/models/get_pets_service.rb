class GetPetsService < ApplicationRecord

    def fetch_pets(params)
        petfinder = Petfinder::Client.new('e1ZInrpBp5ydoqmqZv1bZGELw81G25V8co94LjwN73zd2U5qc3', 'u8HpPjgqAgkTU04nkYjPyzogCrPJ9CgZnj7FSblR')
        petfinder.animals(type: params[:type], location: params[:zipcode], distance: 10, page: 1)
    end
end
