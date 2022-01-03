const fetchPhotoRequest = async ()  => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Accept-Version": "v1",
        "Authorization" : "Client-ID OsXzHZzH7gPwksmgkSSIAg9TKJnQUx6uUfZopMa6s-A",
      },
    };
  const fetchPhoto = await fetch("https://api.unsplash.com/photos/random", config);
  const response = fetchPhoto && await fetchPhoto.json();
  // response && console.log(response);

  return response && response.urls.regular;
}
export default fetchPhotoRequest;

/*
  .then((response) => response.json())
  .then((data) => console.log(data));

*/
/*
si usa asynch e await come best practice al posto delle callback .then perchè
si può gestire in maniera piu pulita. --> async davanti dichiarazione funzione,
await davanti successive operazioni
per utilizzare then si usa try catch
*/