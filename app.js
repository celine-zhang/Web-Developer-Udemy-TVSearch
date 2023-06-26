const form = document.querySelector("#searchForm");
const container = document.querySelector(".column");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const searchTerm = form.elements.query.value;
  const config = { params: { q: searchTerm } };
  const res = await axios.get(
    // ` https://api.tvmaze.com/search/shows?q=${searchTerm}`
    ` https://api.tvmaze.com/search/shows`,
    config
  );
  // console.log(res.data);
  makeImages(res.data);
  form.elements.query.value = "";
});

form.addEventListener("change", function () {
  const imgs = document.querySelectorAll("img");
  for (let img of imgs) {
    img.remove();
  }
});

const makeImages = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement("IMG");
      img.src = result.show.image.medium;
      container.append(img);
    }
  }
};
