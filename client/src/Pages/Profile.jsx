import { useState, useEffect } from 'react'

import { DisplayCampaigns } from '../Components';
import { useStateContext } from '../Context'


import { CgWebsite } from 'react-icons/cg'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { HiDotsVertical } from 'react-icons/hi'




const style = {
  bannerImageContainer: `h-[35vh] w-50 overflow-hidden flex items-center`,
  bannerImage: `w-full object-cover rounded-2xl`,
  infoContainer: `w-screen px-4 flex flex-col justify-center items-center`,
  midRow: `w-full flex justify-center text-white`,
  endRow: `w-full flex justify-end text-white`,
  profileImg: `w-40 h-40 object-cover rounded-full border-2 border-[#202225] mt-[-4rem]`,
  socialIconsContainer: `flex text-3xl mb-[-2rem]`,
  socialIconsWrapper: ``,
  socialIconsContent: `flex container justify-between text-[1.4rem] border-2 rounded-lg px-2`,
  socialIcon: `my-2`,
  divider: `border-r-2`,
  title: `text-5xl font-bold mb-4 text-[#40e0d0]`,
  createdBy: `text-lg mb-4`,
  statsContainer: `w-[44vw] flex justify-between py-4 border border-[#151b22] rounded-xl mb-4`,
  collectionStat: `w-1/4`,
  statValue: `text-3xl font-bold w-full flex items-center justify-center text-[#9b9ca9]`,
  ethLogo: `h-6 mr-2 text-[#9b9ca9]`,
  statName: `text-lg w-full text-center mt-1 text-[#9b9ca9]`,
  description: `text-[#9b9ca9] text-xl w-max-1/4 flex-wrap mt-4`,
  container: {
    maxWidth: '100%', // Ensure the container doesn't exceed the screen width
    overflowX: 'hidden', // Hide horizontal overflow
    overflowY: 'auto', // Add vertical scroll when content exceeds the screen height
  },
}


const Profile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const { address, contract, getUserCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getUserCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  }

  useEffect(() => {
    if(contract) fetchCampaigns();
  }, [address, contract]);

  return (

    <div className='overflow-hidden flex flex-col items-center'>
      <div className={style.bannerImageContainer}>
        <img
          className={style.bannerImage}
          src='https://imageio.forbes.com/specials-images/imageserve/5dfd02fc4e2917000783972d/crowdfunding-concept/0x0.jpg?crop=1000,563,x0,y73,safe&height=400&width=711&fit=bounds'

          alt="banner"
        />
      </div>
      <div className={style.infoContainer}>
        <div className={style.midRow}>
          <img
            className={style.profileImg}
            src='https://www.sec.gov/files/crowdfunding-v5b-2016.jpg'

            alt="profile image"
          />
        </div>
        <div className={style.endRow}>
          <div className={style.socialIconsContainer}>
            <div className={style.socialIconsWrapper}>
              <div className={style.socialIconsContent}>
                <div className={style.socialIcon}>
                  <CgWebsite />
                </div>
                <div className={style.divider} />
                <div className={style.socialIcon}>
                  <AiOutlineInstagram />
                </div>
                <div className={style.divider} />
                <div className={style.socialIcon}>
                  <AiOutlineTwitter />
                </div>
                <div className={style.divider} />
                <div className={style.socialIcon}>
                  <HiDotsVertical />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.midRow}>
          <div className={style.title}>BlockFund</div>
        </div>
        <div className={style.midRow}>
          <div className={style.createdBy}>
            Created by{' '}
            <span className="text-[#2081e2]">Subhasish & Aman</span>
          </div>
        </div>
        <div className={style.midRow}>
          <div className={style.statsContainer}>
            <div className={style.collectionStat}>
              <div className={style.statValue}>10</div>
              <div className={style.statName}>Total Donations</div>
            </div>
            <div className={style.collectionStat}>
              <div className={style.statValue}>
                {/* {collection?.allOwners ? collection.allOwners.length : ''} */}S & A
              </div>
              <div className={style.statName}>owner</div>
            </div>
            <div className={style.collectionStat}>
              <div className={style.statValue}>
                <img
                  src="https://thegivingblock.com/wp-content/uploads/2021/07/Ethereum-ETH-Logo.png"
                  alt="eth"
                  className={style.ethLogo}
                />
                $1000
              </div>
              <div className={style.statName}>Average Donated</div>
            </div>
            <div className={style.collectionStat}>
              <div className={style.statValue}>
                <img
                  src="https://thegivingblock.com/wp-content/uploads/2021/07/Ethereum-ETH-Logo.png"
                  alt="eth"
                  className={style.ethLogo}
                />
                {/* {collection?.volumeTraded}.5K */}
                $10000
              </div>
              <div className={style.statName}>Total Funds</div>
            </div>
          </div>
        </div>
        {/* <div className={style.midRow}>
          <div className={style.description}>description</div>
        </div> */}
      </div>

      <DisplayCampaigns 
      title="Your Campaigns"
      isLoading={isLoading}
      campaigns={campaigns}
    />
    </div>
    
  )
}

export default Profile