const ACCESS_TOKEN_MAP_BOX =
"sk.eyJ1IjoiYW5kZXJzb25sYzIiLCJhIjoiY2t4N3Q3bDlmMnlzNjJ5bzY4cnYzY21hOSJ9.FHOrIkH8UG2gEn2HS91VhQ";

export const fetchLocalMapBox = (local: string) =>
fetch(
  `https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?${ACCESS_TOKEN_MAP_BOX}`
).then(response => response.json()).then(data => data);

export const fetchUserGithub = (login: string) =>
fetch(`https://api.github.com/users/${login}`).then(response => response.json()).then(data => data);