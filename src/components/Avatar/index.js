import { Image } from 'react-native';

const Avatar = () => {
  return (
    <View
        styles={{
            width: 150, 
            height: 150, 
            backgroundColor: 'red', 
        }}
    >
    <Image
      source={require('../../assets/Logo.jpg')}
      style={{ 
        width: '100%',
        height: '100%',
        borderRadius: 75,
        padding: 50,
        margin: 20
    }}
    />
    </View>
  );
}

export default Avatar;
