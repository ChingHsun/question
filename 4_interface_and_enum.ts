/** Can you explain about Interface and Enum, and where will you be using, please make some examples. **/

/**
 * Interface is type to structure the object, giving the shape to define the object should be.
 * It's not only help the code more strictly, but also allow developer quickly recognize the object's contract.
 * such as defining the response object from API, or the props of a React Component
 * take the first querstion for example

 * Enum is a fixed key-value pair to define a set of name constants.
 * I used a lot while it is more easier to develop and collaberate with others
 * ex: 
 */

enum ProfessionEnum {
  STUDENT = "STUDENT",
  FREELANCER = "FREELANCER",
  PRODUCT_OWNER = "PRODUCT_OWNER",
  ENGINEER = "ENGINEER",
  SYSTEM_ANALYTICS = "SYSTEM_ANALYTICS",
}

interface User {
  firstName: string;
  lastName: string;
  customerID: string;
  note: string;
  profession: ProfessionEnum;
}
