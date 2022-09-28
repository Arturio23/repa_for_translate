import Link from "next/link";
import LocaleSwitcher from "../components/locale-switcher";

export async function getServerSideProps({locale}) {
  let lang = null;
  if (locale === 'ru') {
    lang = 2
  } else if (locale === 'en') {
      lang = 1
    }
  
  const res = await fetch(`https://eloboss-api-v2.herokuapp.com/news/catalog?lang=${lang}`);
  const data = await res.json();
  return {
    props: {
      todos: data,
      lang: locale,
    }
  }
}

export default function Home({todos,lang} ) {
  return (
    <>    
      <div>
        {todos.list[0].title}
      </div>
      <div>
        {todos.list[0].description}
      </div>
      <div>
      <p>Configured locales: {JSON.stringify(lang)}</p>
      </div>
      <div>
          <LocaleSwitcher/>
      </div>
    </>
  )
}
