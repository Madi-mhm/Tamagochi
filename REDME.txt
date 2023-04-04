#Tamagochi

- The site meets the specifications
- Expected functionality does not produce errors
- The site is responsive and adapts to a maximum of screens
- The interface conforms to the model
- Files and assets are organized
- The page is functional
- Compliance with good naming practices
- Adherence to good indentation practices
- Respect for good semantic practices


## Functional
The user arrives on a welcome screen, this contains a form to enter the name of his companion and select the type of companion he wishes to play. 
He launches the game using a “Start” button.
Your companions have three gauges indicating the level of a need ( Blood, Meat and food), each companion has at least one of these three gauges which is specific to him.
The level of the gauges drops automatically and each gauge has a button to power it up. When the three gauges drop to zero the user has lost.


## Technical
Your game has at least one parent class and two child classes that extend it. The companions available to the user are your child classes, example:
Parent class (user cannot play it): Animal
Child classes (the user can play them): Dragon and Wolf


##### Companion gauges start at 100% when the game starts and decrease as follows:

- decreases by 10% between 50% and 100% HP
- decreases by 6% between 15% and 50% HP
- decreases by 2% between 0% and 15% of hitpoints
- The user can power up the gauges using a button which increases the gauge by 10%, the gauge cannot exceed 100%.



#### Links

- Trello (job organization): https://trello.com/invite/b/dRoBSkgW/ATTI0e075fcbe03e11cc2de65c407649640437659F2D/tamagochi
- Figma (model) : https://www.figma.com/file/lpLEXx4HwSPjC0YswlWH2C/Tamagochi?node-id=0%3A1&t=XN4ytkOcR4GVHFVI-1
- git clone : git@github.com:Madi-mhm/Tamagochi.git

