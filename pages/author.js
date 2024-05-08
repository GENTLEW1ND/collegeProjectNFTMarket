import React, { useState, useEffect, useContext } from 'react'

// INTERNAL IMPORT
import Style from '../styles/author.module.css'
import { Banner } from '../collectionPage/collectionIndex'
import { Brand, Title } from '../components/ComponentIndex'
import FollowerTabCard from '../components/FollowerTab/FollowerTabCard/FollowerTabCard.jsx'
import images from '../img'
import { AuthorProfileCard, AuthorTabs, AuthorNFTCardBox } from '../authorPage/componentsIndex.jsx'

//IMPORT SMART CONTRACT
import { NFTMarketplaceContext } from '../context/NFTMarketplaceContext.js'
import { BsDisplay } from 'react-icons/bs'

const author = () => {

    const [collectiables, setCollectiables] = useState(true)
    const [created, setCreated] = useState(false)
    const [like, setLike] = useState(false)
    const [follower, setFollower] = useState(false)
    const [following, setFollowing] = useState(false)

    //IMPORT SMART CONTRACT DATA
    const { fetchMyNFTsOrListedNFTs, currentAccount } = useContext(NFTMarketplaceContext)

    const [nfts, setNfts] = useState([])
    const [myNfts, setMyNfts] = useState([])


    //THIS HOOK IS USED FOR FETCHING THE LISTED NFTS
    useEffect(() => {
        fetchMyNFTsOrListedNFTs("fetchItemsListed").then((items) => {
            console.log("Listed NFTs:", items);
            setNfts(items)
        })
            .catch((error) => {
                console.error('Error fetching "Listed NFTs":', error);
            })
    }, []);

    //THIS HOOK IS USED FOR FETCHING MY NFTS
    useEffect(() => {
        fetchMyNFTsOrListedNFTs("fetchMyNFTs")
            .then((items) => {
                console.log("my NFTs:", items);
                setMyNfts(items);
            })
            .catch((error) => {
                console.error('Error fetching "My NFTs":', error);
            });
    }, []);


    return (
        <div className={Style.banner}>
            <Banner bannerImage={images.creatorbackground2} />
            <AuthorProfileCard currentAccount={currentAccount} />
            <div style={{
    marginTop: '20px',
    paddingLeft: '40rem',
    backgroundColor: '#f0f0f0',
    borderRadius: '5px',
    display: 'flex',  // Adding flex display
    flexDirection: 'row',  // Setting direction to row
    fontSize: '16px',  // Increasing font size
}} className={Style.nftCount}>
    <p style={{ margin: '5px 20px' }}>Listed NFTs: {nfts.length}</p>
    <p style={{ margin: '5px 20px' }}>Owned NFTs: {myNfts.length}</p>
</div>

            <AuthorTabs
                setCollectiables={setCollectiables}
                setCreated={setCreated}
                setLike={setLike}
                setFollower={setFollower}
                setFollowing={setFollowing}
            />
            <AuthorNFTCardBox
                collectiables={collectiables}
                created={created}
                like={like}
                follower={follower}
                following={following}
                nfts={nfts}
                myNfts={myNfts}
            />

            <Brand />
        </div>
    )
}

export default author