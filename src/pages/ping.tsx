import { GetServerSideProps } from 'next'

const Ping = () => undefined

export const getServerSideProps: GetServerSideProps = async (context) => {
  context.res.end('pong')
  return { props: {} }
}

export default Ping
