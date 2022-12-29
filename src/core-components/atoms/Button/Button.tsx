import { TouchableOpacity, Text } from 'react-native';

interface IButton {
  label: string;
}

const Button = ({ label }: IButton) => (
  <TouchableOpacity>
    <Text>{label}</Text>
  </TouchableOpacity>
);

export default Button;
