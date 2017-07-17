import { ConnectDataClass, UserClass, UserDataClass } from './class_models'
import { diana } from './base64img'

const createConnectData = (description, text) => {
  return new ConnectDataClass(description,text)
}

const createUser = () => {
    let userData_personalData_name = createConnectData('Name','Lehmann')
    let userData_personalData_surname = createConnectData('Vorname','Diana')
    let userData_personalData_phone = createConnectData('Handy','+49 889 145 676')
    let userData_personalData_image = createConnectData('Image',diana)
    let userData_hashTagData_color = createConnectData('Beruf','Auszubildnede 66 Media')
    let userData_hashTagData_hobby = createConnectData('Interesse','Förderprojekt')
    let userData_hashTagData_subject = createConnectData('Wohnort','Dresden')
    let userData_socialData_facebook = createConnectData('Facebook','https://web.facebook.com/DonaldTrump/?_rdc=1&_rdr')
    let userData_socialData_linkedIn = createConnectData('LinkedIn','https://www.linkedin.com/in/donald-trump-jr-4454b862/?locale=de_DE')
    let userData_socialData_twitter = createConnectData('Twitter','https://twitter.com/realdonaldtrump?lang=de')


    let publicSharedData_personalData = []
    publicSharedData_personalData.push(userData_personalData_name)
    publicSharedData_personalData.push(userData_personalData_phone)

    let publicSharedData_socialData = []
    publicSharedData_socialData.push(userData_socialData_facebook)
    publicSharedData_socialData.push(userData_socialData_twitter)

    let publicSharedData_hashTagData = []
    publicSharedData_hashTagData.push(userData_hashTagData_hobby)
    publicSharedData_hashTagData.push(userData_hashTagData_color)
    publicSharedData_hashTagData.push(userData_hashTagData_subject)

    let userData_personalData = []
    userData_personalData.push(userData_personalData_surname)
    userData_personalData.push(userData_personalData_name)
    userData_personalData.push(userData_personalData_phone)
    userData_personalData.push(userData_personalData_image)

    let userData_socialData = []
    userData_socialData.push(userData_socialData_facebook)
    userData_socialData.push(userData_socialData_linkedIn)
    userData_socialData.push(userData_socialData_twitter)

    let userData_hashTagData = []
    userData_hashTagData.push(userData_hashTagData_hobby)
    userData_hashTagData.push(userData_hashTagData_color)

    let userDataClass = new UserDataClass(userData_personalData, userData_socialData, userData_hashTagData)
    let publicSharedDataClass = new UserDataClass(publicSharedData_personalData, publicSharedData_socialData, publicSharedData_hashTagData)
    let user = new UserClass('a4',userDataClass,publicSharedDataClass,[])
    return user
}

const diana_user = createUser()
export default diana_user
