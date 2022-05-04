export const df = {}
// export const fetchUsers = createAsyncThunk(
//     "user/fetchAll",
//     async (_, thunkApi) => {
//       try {
//         const response = await axios.get<IUser[]>(
//           "https://jsonplaceholder.typicode.com/users"
//         );
//         return response.data;
//       } catch (e) {
//           return thunkApi.rejectWithValue('error from me')
//       }
//     }
//   );