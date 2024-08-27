/**
 * Copyright (c) Streamlit Inc. (2018-2022) Snowflake Inc. (2022-2024)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, {
  ReactElement,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react"

import groupBy from "lodash/groupBy"
// We import react-device-detect in this way so that tests can mock its
// isMobile field sanely.
import * as reactDeviceDetect from "react-device-detect"
import { IAppPage, StreamlitEndpoints, useIsOverflowing } from "@streamlit/lib"

import { AppContext } from "@streamlit/app/src/components/AppContext"

import NavSection from "./NavSection"
import SidebarNavLink from "./SidebarNavLink"
import {
  StyledSidebarNavContainer,
  StyledSidebarNavItems,
  StyledSidebarNavSeparator,
  StyledViewButton,
} from "./styled-components"

export interface Props {
  endpoints: StreamlitEndpoints
  appPages: IAppPage[]
  navSections: string[]
  collapseSidebar: () => void
  currentPageScriptHash: string
  hasSidebarElements: boolean
  onPageChange: (pageName: string) => void
}

/** Displays a list of navigable app page links for multi-page apps. */
const SidebarNav = ({
  endpoints,
  appPages,
  collapseSidebar,
  currentPageScriptHash,
  hasSidebarElements,
  navSections,
  onPageChange,
}: Props): ReactElement | null => {
  const [expanded, setExpanded] = useState(false)
  const navItemsRef = useRef<HTMLUListElement>(null)
  const isOverflowing = useIsOverflowing(navItemsRef, expanded)
  const { pageLinkBaseUrl } = useContext(AppContext)

  const handleViewButtonClick = useCallback(() => {
    setExpanded(!expanded)
  }, [expanded])

  const generateNavLinks = useCallback(
    (page: IAppPage, index: number) => {
      if (page.sidebarHidden) {
        return null
      }
      const pageUrl = endpoints.buildAppPageURL(pageLinkBaseUrl, page)
      const pageName = page.pageName as string
      const tooltipContent = pageName.replace(/_/g, " ")
      const isActive = page.pageScriptHash === currentPageScriptHash

      return (
        <li key={`${pageName}-${index}`}>
          <SidebarNavLink
            isActive={isActive}
            pageUrl={pageUrl}
            icon={page.icon}
            onClick={e => {
              e.preventDefault()
              onPageChange(page.pageScriptHash as string)
              if (reactDeviceDetect.isMobile) {
                collapseSidebar()
              }
            }}
          >
            {tooltipContent}
          </SidebarNavLink>
        </li>
      )
    },
    [
      collapseSidebar,
      currentPageScriptHash,
      endpoints,
      onPageChange,
      pageLinkBaseUrl,
    ]
  )

  let contents = null
  if (navSections.length > 0) {
    const pagesBySectionHeader = groupBy(
      appPages.filter(page => !page.sidebarHidden), // Filter out hidden pages
      page => page.sectionHeader || ""
    )

    contents = navSections.map(header => {
      const pageElements = (pagesBySectionHeader[header] ?? []).map(
        generateNavLinks
      )
      return (
        <NavSection key={header} header={header}>
          {/* Ensure multiple children are passed correctly */}
          {pageElements}
        </NavSection>
      )
    })
  } else {
    const pageElements = appPages
      .filter(page => !page.sidebarHidden)
      .map(generateNavLinks)
    contents = <>{pageElements}</> // Wrap in a fragment to ensure it's an array of elements
  }

  // We should show the nav items as expanded if
  // - there are no sidebar elements
  // - the user has explicitly expanded the sidebar
  const shouldShowNavItemsAsExpanded = !hasSidebarElements || expanded

  // We should show the "View more" button if
  // - there are sidebar elements and it produce an overflow
  // - the user has explicitly expanded the sidebar indicating
  //   the possibility to collapse it
  const shouldShowViewButton =
    (hasSidebarElements && isOverflowing) || expanded

  return (
    <StyledSidebarNavContainer data-testid="stSidebarNav">
      <StyledSidebarNavItems
        ref={navItemsRef}
        isExpanded={shouldShowNavItemsAsExpanded}
        hasSidebarElements={hasSidebarElements}
        data-testid="stSidebarNavItems"
      >
        {contents}
      </StyledSidebarNavItems>

      {hasSidebarElements && (
        <>
          {shouldShowViewButton && (
            <StyledViewButton
              onClick={handleViewButtonClick}
              data-testid="stSidebarNavViewButton"
            >
              {expanded ? "View less" : "View more"}
            </StyledViewButton>
          )}
          <StyledSidebarNavSeparator data-testid="stSidebarNavSeparator" />
        </>
      )}
    </StyledSidebarNavContainer>
  )
}

export default SidebarNav
