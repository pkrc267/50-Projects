Has column navigation through up & down arrow keys that bypasses tab order.

WHAT WORKS:

• tab follows DOM order, as it should.

• Up & Down arrow navigation navigates in columns & spans columns while navigating.


WHAT DOES NOT WORK:

• tab with arrow navigation combined does not work.

• EXPECTED: till whereever we have tabbed, we should be able to navigate with arrow keys from there

• CURRENTLY: arrow navigation will pick up from where it left.



TODO: combination of arrow keys & tab