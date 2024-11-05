# Lottery APi

- sell lottery tickets
- update lottery tickets
- delete lottery tickets
- get all tickets
- get ticket by id
- bulk buy(user can by multiple ticket at a time)
- raffle draw

Ticket:
 - number(unique),
 - username
 - price
 - timestamp

Routes:
- /tickets/t/:ticketId - GET - find single ticket
- /tickets/t/:ticketId - PATCH - update ticket by id
- /tickets/t/:ticketId - DELETE - delete ticket
- /tickets/u/:username - find tickets for a single user
- /tickets/u/:username - update tickets for a single user
- /tickets/u/:username - Delete tickets for a single user
- /tickets/sell - create ticket
- /tickets/bulk - bulk tickets
- /tickets/draw
- /tickets - find all tickets
