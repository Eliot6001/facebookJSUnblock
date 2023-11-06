# facebookJSUnblock
A simple code i wrote in JS in order to basically just trigger the unblock buttons so i save a bit more time. (Probably needs more improvements)


### Initial Click:
The script initially identifies and clicks on all existing <div> elements with the attribute aria-label="Unblock".
      Clicking is done with a 200ms delay between each click
### Dynamic loading mutation:
The code utilizes a MutationObserver to detect changes in the DOM, specifically new additions of elements with aria-label="Unblock".
      Upon detecting such changes, it waits for a short period (1 second in this case) to ensure all relevant elements are loaded before proceeding to click the newly added elements.


# Instruction to use the code:

1. Go to https://www.facebook.com/settings/?tab=blocking  && Click on "Edit" in the Block users section 
2. Open up your console clicking F12, and Paste the code
3. Spam the unblock button.
  
