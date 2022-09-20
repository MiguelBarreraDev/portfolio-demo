import { navigationLinks, socialNetworksLinks } from "@/config"
import objToList from "./objToList"

export const navigationList = () => {
  return objToList(navigationLinks)
}

export const socialNetworksList = () => {
  return objToList(socialNetworksLinks)
}
