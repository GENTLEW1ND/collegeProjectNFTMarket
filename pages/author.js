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

const author = () => {
    const followingArray = [
        {
            background: images.creatorbackground1,
            user: images.user1,
            seller: "kflfsfsdflkdjflsd",
        },
        {
            background: images.creatorbackground2,
            user: images.user2,
            seller: "kflfsfsdflkdjflsd",

        },
        {
            background: images.creatorbackground3,
            user: images.user3,
            seller: "kflfsfsdflkdjflsd",

        },
        {
            background: images.creatorbackground4,
            user: images.user4,
            seller: "kflfsfsdflkdjflsd",

        },
        {
            background: images.creatorbackground5,
            user: images.user5,
            seller: 'kflfsfsdflkdjflsd',

        },
        {
            background: images.creatorbackground6,
            user: images.user6,
            seller: "kflfsfsdflkdjflsd",

        },
        {
            background: images.creatorbackground7,
            user: images.user7,
            seller: "kflfsfsdflkdjflsd",

        },
    ]

    const [collectiables, setCollectiables] = useState(true)
    const [created, setCreated] = useState(false)
    const [like, setLike] = useState(false)
    const [follower, setFollower] = useState(false)
    const [following, setFollowing] = useState(false)

    //IMPORT SMART CONTRACT DATA
    const {fetchMyNFTsOrListedNFTs, currentAccount} = useContext(NFTMarketplaceContext)

    const[nfts, setNfts] = useState([])
    const[myNfts, setMyNfts] = useState([])


    //THIS HOOK IS USED FOR FETCHING THE LISTED NFTS
    useEffect(() => {
        fetchMyNFTsOrListedNFTs("fetchItemsListed").then((items)=>{
            console.log("Listed NFTs:", items);
            setNfts(items)
        })
        .catch((error)=>{
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
            <AuthorProfileCard currentAccount={currentAccount}/>
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
            <Title heading="Popular creator" paragraph="Click on music icon and enjoy NFT music or audio " />
            <div className={Style.author_box}>
                {
                    followingArray.map((el, i) => (
                        <FollowerTabCard el={el} i={i} />
                    ))
                }
            </div>
            <Brand />
        </div>
    )
}

export default author