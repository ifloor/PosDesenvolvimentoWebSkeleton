import {ProductCategory} from "./types";
import express from 'express';

const app = express();
const port = 3000;

app.get('/api/allowedCategory', (req: any, res: any) => {
  let allowed = false;

  const category: string | undefined = req.query.category as string;
  if (!category) {
    res.status(400).send('category parameter is required');
    return;
  }

  const lowerCaseCategory = category.toLowerCase();
  if (
    lowerCaseCategory === "Moda".toLowerCase() ||
    lowerCaseCategory === "Eletronicos".toLowerCase() ||
    lowerCaseCategory === "CasaDecoracao".toLowerCase() ||
    lowerCaseCategory === "SaudeBeleza".toLowerCase() ||
    lowerCaseCategory === "EsporteLazer".toLowerCase() ||
    lowerCaseCategory === "Livros".toLowerCase() ||
    lowerCaseCategory === "Papelaria".toLowerCase() ||
    lowerCaseCategory === "Brinquedos".toLowerCase() ||
    lowerCaseCategory === "Jogos".toLowerCase() ||
    lowerCaseCategory === "Petshop".toLowerCase() ||
    lowerCaseCategory === "Automotivos".toLowerCase()
  ) {
    allowed = true;
  }


  res.send({ allowed: allowed });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});