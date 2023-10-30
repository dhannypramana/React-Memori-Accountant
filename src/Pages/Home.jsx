import Box from "../Component/Box"

const Home = () => {
  return(
    <>
      <div className="md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-4">
        <Box title={'Pemasukan'} text={'350.000'} />
        <Box title={'Pengeluaran'} text={'350.000'} />
        <Box title={'Total'} text={'350.000'} />
      </div>
    </>
  )
}

export default Home
