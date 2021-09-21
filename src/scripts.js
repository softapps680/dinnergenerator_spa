  export function randoMize() {
   
    let suggestions = [
      {
        "Id": "8eec66e0aa751aac27fa441440b2821a",
        "Name": "Meatloaf",
      } ,
      {
        "Id": "7b8c04af38158243fb5acdbc7216e44c",
        "Name": "Meatsauce",
      } ,
      {
        "Id": "6993e5dd0f0f8cfb38bf334b34be26bc",
        "Name": "Tomatosoup",
      },
      {
        "Id": "83825a949899e609799fce42fcfc5d1a",
        "Name": "Zucchini and sausage casserole",
      },
      {
        "Id": "69f0a467f0804e85cbd056391d83e03e",
        "Name": "Grilled salmon",
      } 
        
        
     ] 
  
    let randomed=Math.floor(Math.random() * 5);
 
   return suggestions[randomed];
}