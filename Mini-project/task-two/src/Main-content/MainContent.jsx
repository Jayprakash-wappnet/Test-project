import React from 'react'
import ProfileData from '../profile/ProfileData'
import Options from '../profile/Options'
import SearchBar from '../profile/SearchBar'
import ClientsData from '../profile/ClientsData'
import Pagination from '../profile/Pagination'

function MainContent() {
  return (
    <div>
      <div className="flex flex-col max-lg:justify-center">
            <ProfileData/> <hr/>
            <Options /> <hr/>
            <SearchBar />
            <ClientsData/>
            <Pagination/>
          </div>
    </div>
  )
}

export default MainContent
