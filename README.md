# spotifyCloneReact
Spotify Music App using React-Native Expo


Front End 
1. React Native
2. Expo
3. TS(TypeScript)
4. React Navigation- for navigation

Backend
1. AWS Amplify

Let's get started:-

Initialise the expo project:
$ expo init SpotifyCloneReact

? Choose "tabs(TypeScript)" as our template

1. Change Color Scheme from light mode to dark mode
-> open app.json
-> select "userInterfaceStyle": "automatic" change to "dark"

2. Bottom Tab Navigator 
  Tab icons (from:- https://icons.expo.fyi/
    1. Entypo: home
    2. EvilIcons: search
    3. MaterialCommunityIcons: library-music-outline
    4. FontAwesome5: Spotify

3. Create Home Screen

4. Creating Album Component
  
  Input (props):
    - album id: String
    - imageUri: String
    - artistsHeadline: String

5. Album Category Component
  
  Input (props):
    - Title: String
    - albums: Array
    
6. Home Screen
    Data:
      - AlbumCategories: Array
      
7. Album Screen
  Route Params:
    - albumId: String
  Data:
    Album (fetched based on the albumId)
    
  Song List:
    - FlatList of SongListItem Component
    - On click, write the song to context to indicate that is playing
