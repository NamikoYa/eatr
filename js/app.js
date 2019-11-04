const restaurantImage = document.querySelector('#restaurant-image')
const restaurantName = document.querySelector('#restaurant-name')
const restaurantDescription = document.querySelector('#restaurant-description')
const restaurantPrice = document.querySelector('#restaurant-price')
const restaurantHealthLevel = document.querySelector('#restaurant-health-level')
const restaurantWebsiteLink = document.querySelector('#restaurant-website-link')
const restaurantDirectionsLink = document.querySelector('#restaurant-directions-link')

const setRestaurant = (img, name, desc, price, health, web, directions) => {

  restaurantImage.src = img

  restaurantName.innerText = name

  restaurantDescription.innerText = desc

  switch (price) {
    case 1:
      restaurantPrice.innerText = "$"
      restaurantPrice.classList.add("badge-success")
      break;
    case 2:
      restaurantPrice.innerText = "$$"
      restaurantPrice.classList.add("badge-warning")
      break;
    case 3:
      restaurantPrice.innerText = "$$$"
      restaurantPrice.classList.add("badge-danger")
      break;
    default:
      restaurantPrice.innerText = "Error!"
      restaurantPrice.classList.add("badge-dark")
      break;
  }

  switch (health) {
    case 1:
      restaurantHealthLevel.innerText = "Healthy"
      restaurantHealthLevel.classList.add("badge-success")
      break;
    case 2:
      restaurantHealthLevel.innerText = "Okay"
      restaurantHealthLevel.classList.add("badge-warning")
      break;
    case 3:
      restaurantHealthLevel.innerText = "Unhealthy"
      restaurantHealthLevel.classList.add("badge-danger")
      break;
    default:
      restaurantHealthLevel.innerText = "Error!"
      restaurantHealthLevel.classList.add("badge-dark")
      break;
  }

  restaurantWebsiteLink.href = web
  restaurantDirectionsLink.href = directions

}

setRestaurant('https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80', 'Lorem', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.', 1, 1, 'https://google.com', 'https://duckduckgo.com')