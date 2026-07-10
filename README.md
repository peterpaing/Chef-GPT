# 🍳 Chef GPT

Chef GPT is a React application that helps users create delicious meals using the ingredients they already have at home. Simply add at least three ingredients, and AI will analyze them to generate the single best recipe tailored to your available ingredients.

---

## ✨ Features

- 🥕 Add and remove ingredients
- 🚫 Prevent duplicate ingredients
- 🤖 AI-powered recipe generation
- ⏳ Loading animation while the recipe is being generated
- 📝 Beautifully formatted recipe using Markdown
- 📱 Responsive and user-friendly interface

---

## ⚙️ How It Works

1. Enter the ingredients you currently have at home.
2. Add at least **3 ingredients** to your list.
3. Click the **Get a Recipe** button.
4. The application sends your ingredients to an AI model through a Make.com webhook.
5. The AI analyzes your ingredients and selects the **single best recipe** based on what you have available.
6. The generated recipe includes:
   - 🍽️ Recipe name
   - ⭐ Why it's the best match
   - ⏱️ Preparation time
   - 🔥 Cooking time
   - 📊 Difficulty level
   - 🥕 Ingredients (available and any additional ingredients needed)
   - 👨‍🍳 Step-by-step cooking instructions
   - 💡 Chef's tips
7. The recipe is displayed in a clean, easy-to-read Markdown format.

---

## 🛠️ Built With

- React
- Vite
- JavaScript (ES6+)
- CSS3
- Marked
- Make.com Webhook
- OpenAI API

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/your-username/ai-chef.git
```

Navigate into the project:

```bash
cd ai-chef
```

Install dependencies:

```bash
npm install
```

Install Marked:

```bash
npm install marked
```

Start the development server:

```bash
npm run dev
```

---

## 📁 Project Structure

```text
src/
│
├── components/
│   ├── Main.jsx
│   └── IngredientList.jsx
│
├── Ai.js
├── App.jsx
└── main.jsx
```

---

## 📸 Preview

![mobile-preview](./Ai%20chef/src/assets/preview.png)

---

## 🚀 Future Improvements

- ❤️ Save favorite recipes
- 🔀 Generate multiple recipe options
- 🌙 Dark mode
- 🖼️ AI-generated meal images
- 🥗 Nutritional information
- 📋 Copy recipe to clipboard
- 📄 Export recipes as PDF

---

## 👨‍💻 Author

Developed by **Peter Paing**.

---

