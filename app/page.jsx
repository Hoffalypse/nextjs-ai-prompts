import Feed from '@components/Feed'

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">Discover and Share
      <br className="max-md:hidden"  />
      <span className="orage_gradient text-center">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Hoff Prompts is an Open Source AI prompting tool for the modern world to discover, create and share your best and most effective prompts
      </p>

      <Feed/>
    </section>
  )
}

export default Home
