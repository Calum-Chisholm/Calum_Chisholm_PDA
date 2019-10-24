require("minitest/autorun")
require('minitest/rg')
require_relative('./card_game')
require_relative('./card')

class CardGameTest < MiniTest::Test

  def setup
    @card1 = Card.new('hearts', 3)
    @card2 = Card.new('clubs', 2)
    @card3 = Card.new('spades', 1)
    @card_game = CardGame.new
  end

  def test_ace
    assert_equal(true, @card_game.check_for_ace(@card3))
  end

  def test_high_card
    assert_equal(@card1, @card_game.highest_card(@card1, @card2))
  end

  def test_card_total
    assert_equal("You have a total of 6", @card_game.cards_total([@card1, @card2, @card3]))
  end

end
