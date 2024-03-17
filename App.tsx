import {
  SafeAreaView,
  ScrollView,
  StyleSheet
} from 'react-native';
import { DAL } from './src/DataAccessLayer';
import { MyComp } from './src/components';

const App = () => {
  const updatingObj = {
    userId: 1,
    title: 'Hello world',
    body: 'This is dummy body',
  };

  const fetchAllPosts = async () => {
    const result = await DAL.GET('/posts');
    return result;
  };

  const fetchPost = async () => {
    const result = await DAL.POST('/posts', updatingObj);
    return result;
  };

  const fetchPut = async () => {
    const result = await DAL.PUT('/posts/1', updatingObj);
    return result;
  };

  const fetchPatch = async () => {
    const result = await DAL.PATCH('/posts/1', {title: 'Just Update Title'});
    return result;
  };

  const fetchDelete = async () => {
    const result = await DAL.DELETE('/posts/1');
    return result;
  };

  return (
    <SafeAreaView style={{gap: 20}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <MyComp
          title="Get Request"
          btnTitle="Fetch All Posts"
          onPress={fetchAllPosts}
        />
        <MyComp
          title="Post Request"
          btnTitle="Post New Data"
          onPress={fetchPost}
        />
        <MyComp
          title="Put Request"
          btnTitle="Put Updated Data"
          onPress={fetchPut}
        />
        <MyComp
          title="Patch Request"
          btnTitle="Patch Updated Data"
          onPress={fetchPatch}
        />
        <MyComp
          title="Delete Request"
          btnTitle="Delete Data"
          onPress={fetchDelete}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
