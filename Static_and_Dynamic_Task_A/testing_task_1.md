### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby

class CardGame


  # def checkforAce(card)  This will work but the method is named badly, should be check_for_ace
    # if card.value = 1   this will set a value for card.value needs a == to compare values
      return true
    else
      return false
    end
  end

  # dif highest_card(card1 card2)  dif should be def and there is a comma missing
  if card1.value > card2.value
    # return card   card is not a parameter this should be return card1
  else
    return card2
  end
end
# end  this end is in the wrong place

def self.cards_total(cards)
  # total   variable has not been given a value, this should be total = 0 
  for card in cards
    total += card.value
    # return "You have a total of" + total  this return is within a loop
  end
end
```
