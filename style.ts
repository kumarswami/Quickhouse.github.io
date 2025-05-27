body {
  font-family: Arial, sans-serif;
  margin: 0;
  background: #f4f4f4;
  color: #333;
}

header {
  background: #2c3e50;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav a {
  color: white;
  margin-left: 15px;
  text-decoration: none;
}

.hero {
  background: url('https://source.unsplash.com/1600x600/?modular,home') center/cover no-repeat;
  padding: 100px 20px;
  text-align: center;
  color: white;
}

.hero .btn {
  background: #e67e22;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  margin-top: 20px;
  display: inline-block;
  border-radius: 5px;
}

section {
  padding: 40px 20px;
}

.features-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.feature-card {
  background: white;
  padding: 20px;
  margin: 10px;
  flex: 1 1 30%;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  text-align: center;
}

form {
  max-width: 600px;
  margin: auto;
  display: flex;
  flex-direction: column;
}

form input, form textarea {
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
}

form button {
  background: #2c3e50;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
}

footer {
  background: #2c3e50;
  color: white;
  text-align: center;
  padding: 10px;
}
