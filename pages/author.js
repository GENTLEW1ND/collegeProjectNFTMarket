import React, { useState, useEffect } from 'react'

// INTERNAL IMPORT
import Style from '../styles/author.module.css'
import { Banner } from '../collectionPage/collectionIndex'
import { Brand, Title } from '../components/ComponentIndex'
import FollowerTabCard from '../components/FollowerTab/FollowerTabCard/FollowerTabCard.jsx'
import images from '../img'
import { AuthorProfileCard, AuthorTabs, AuthorNFTCardBox } from '../authorPage/componentsIndex.jsx'

const author = () => {
    const followingArray = [
        {
            background: images.creatorbackground1,
            user: images.user1,
        },
        {
            background: images.creatorbackground2,
            user: images.user2,
        },
        {
            background: images.creatorbackground3,
            user: images.user3,
        },
        {
            background: images.creatorbackground4,
            user: images.user4,
        },
        {
            background: images.creatorbackground5,
            user: images.user5,
        },
        {
            background: images.creatorbackground6,
            user: images.user6,
        },
        {
            background: images.creatorbackground7,
            user: images.user7,
        },
    ]

    const [collectiables, setCollectiables] = useState(true)
    const [created, setCreated] = useState(false)
    const [like, setLike] = useState(false)
    const [follower, setFollower] = useState(false)
    const [following, setFollowing] = useState(false)
    return (
        <div className={Style.banner}>
            <Banner bannerImage={images.creatorbackground2} />
            <AuthorProfileCard />
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