import { Header } from "./components/Header";
import { Post } from "./Post"

import './global.css';

export function App() {

  return (
    <div>
      <Header />
      <Post 
        author="Diego Fernandes" 
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores libero atque quidem voluptatem iusto facere doloribus, tempora ad beatae accusamus aperiam? Ullam ea suscipit a vel sunt, ratione ducimus expedita."
      />
      <Post 
        author="Polly Mascarenhas"
        content="Conteudo indefinido"
      />
    </div>
  )
}