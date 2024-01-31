# HTTP and React
<a href="https://youtu.be/GTmjthNvrxY?si=VkHOPhL1-LaMNK72" target="_blank">Video Explanation</a></br> 
<img src="41 - React HTTP.png" width="900" height="500">
Create a react app via 'npx create-react-app react-http'
and install axios via 'npm install axios'

# HTTP GET Request (using axios)
<a href="https://youtu.be/NEYrSUM4Umw?si=hB5t0uaG4yQjAATx" target="_blank">Video Explanation</a></br> 
Make http request in componentDidMount() method. It runs only once after the UI rendered. 
So that when UI rendered completely, it makes request, fetch data and then re-rednered(using state) the data again.
refers to 'PostList.js' in 'react-http' app.

# HTTP Post Request
<a href="https://youtu.be/x9UEDRbLhJE?si=GvLqECtiCtagVrCl" target="_blank">Video Explanation</a></br> 
To make Post request simply pass the 2nd parameter in axios as data object and receives the response in 'then'.
For form validation you can use a libaray 'Fromic' which help you with form in react. Also if you are using 'Redux' you might take look at 'Redux Axios Middleware'
* Put or Delete request also same like these POST and GET, experiement by yourself these.