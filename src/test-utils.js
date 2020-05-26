import { DeviceContext } from 'contexts';


export const mockDeviceContext = (ReactAll, device) => {
  jest.spyOn(ReactAll, 'useContext').mockImplementation(context => {
    return context === DeviceContext ? device : null;
  });
};
