import { useRef } from 'react'
import { CandyShop } from '@liqnft/candy-shop-sdk'
import { Orders, Stat } from '@liqnft/candy-shop'
import { useAnchorWallet } from '@solana/wallet-adapter-react'
import { PublicKey, Cluster } from '@solana/web3.js'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import styled from 'styled-components'

const CANDY_SHOP_CREATOR_ADDRESS = new PublicKey(process.env.REACT_APP_CANDY_SHOP_CREATOR_ADDRESS!)
const CANDY_SHOP_TREASURY_MINT = new PublicKey(process.env.REACT_APP_CANDY_SHOP_TREASURY_MINT!)
const CANDY_SHOP_PROGRAM_ID = new PublicKey(process.env.REACT_APP_CANDY_SHOP_PROGRAM_ID!)
const NETWORK = process.env.REACT_APP_SOLANA_NETWORK! as Cluster

const DesContainer = styled.div`
  width: 100%;
`

const Marketplace: React.FC = () => {
  const wallet = useAnchorWallet();

const candyShopRef = useRef<CandyShop>(
    new CandyShop(
      CANDY_SHOP_CREATOR_ADDRESS,
      CANDY_SHOP_TREASURY_MINT,
      CANDY_SHOP_PROGRAM_ID,
      NETWORK, {
        currencyDecimals: 9,
        currencySymbol: "$0R0R"
      }
    )
  )

  return (
    <DesContainer>
      <Stat
        candyShop={candyShopRef.current}
        title={'Marketplace'}
        description={'00RR0R Sh0p is the place to go to redeem your $0R0R tokens for probably more 00RR0Rs that can earn you more tokens and then ??? you win '}
        style={{ paddingBottom: 50 }}
      />
      <Orders
        wallet={wallet}
        candyShop={candyShopRef.current}
        walletConnectComponent={<WalletMultiButton />}
      />
    </DesContainer>
  )
}

export default Marketplace
