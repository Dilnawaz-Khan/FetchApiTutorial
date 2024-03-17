import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';

import {MyComp} from './src/components';
import {useState} from 'react';
import {DAL} from './src/DataAccessLayer';
import {Endpoints} from './src/constants/Endpoint';

//DRY = DON"T REPEAT YOURSELF
const App = () => {
  const [loader, setLoader] = useState(false);

  const updatingObj = {
    userId: 1,
    title: 'Codingwith Dill',
    body: 'we are learning fetch api calls',
  };

  //without using generic code

  // const fetchAllPosts = async () => {
  //   setLoader(true);
  //   try {
  //     const response = await fetch(
  //       'https://jsonplaceholder.typicode.com/posts',
  //       {
  //         method: 'GET',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //       },
  //     );
  //     const result = await response.json();
  //     return result;
  //   } catch (error) {
  //     console.log('Error: ', error);
  //   } finally {
  //     setLoader(false);
  //   }
  // };
  // const fetchPost = async () => {
  //   setLoader(true);
  //   try {
  //     const response = await fetch(
  //       'https://jsonplaceholder.typicode.com/posts',
  //       {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify(updatingObj),
  //       },
  //     );
  //     const result = await response.json();
  //     return result;
  //   } catch (error) {
  //     console.log('Error: ', error);
  //   } finally {
  //     setLoader(false);
  //   }
  // };
  // const fetchPut = async () => {
  //   setLoader(true);
  //   try {
  //     const response = await fetch(
  //       'https://jsonplaceholder.typicode.com/posts/1',
  //       {
  //         method: 'PUT',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify(updatingObj),
  //       },
  //     );
  //     const result = await response.json();
  //     return result;
  //   } catch (error) {
  //     console.log('Error: ', error);
  //   } finally {
  //     setLoader(false);
  //   }
  // };
  // const fetchPatch = async () => {
  //   setLoader(true);
  //   try {
  //     const response = await fetch(
  //       'https://jsonplaceholder.typicode.com/posts/1',
  //       {
  //         method: 'PATCH',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({title: 'Codingwith Dill'}),
  //       },
  //     );
  //     const result = await response.json();
  //     return result;
  //   } catch (error) {
  //     console.log('Error: ', error);
  //   } finally {
  //     setLoader(false);
  //   }
  // };
  // const fetchDelete = async () => {
  //   setLoader(true);
  //   try {
  //     const response = await fetch(
  //       'https://jsonplaceholder.typicode.com/posts/1',
  //       {
  //         method: 'DELETE',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //       },
  //     );
  //     const result = await response.json();
  //     return result;
  //   } catch (error) {
  //     console.log('Error: ', error);
  //   } finally {
  //     setLoader(false);
  //   }
  // };

  //with using generic code
  const fetchAllPosts = async () => {
    const result = await DAL.GET(Endpoints.posts);
    return result;
  };

  const fetchPost = async () => {
    const result = await DAL.POST(Endpoints.posts, updatingObj);
    return result;
  };

  const fetchPut = async () => {
    const result = await DAL.PUT(`${Endpoints.posts}/1`, updatingObj);
    return result;
  };

  const fetchPatch = async () => {
    const result = await DAL.PATCH(`${Endpoints.posts}/1`, {
      title: 'Just Update Title',
    });
    return result;
  };

  const fetchDelete = async () => {
    const result = await DAL.DELETE(`${Endpoints.posts}/1`);
    return result;
  };

  return (
    <SafeAreaView style={{gap: 20}}>
      {loader && <ActivityIndicator size={'large'} />}
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
