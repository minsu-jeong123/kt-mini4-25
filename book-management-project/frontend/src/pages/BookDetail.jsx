import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Box,
  Container,
  Typography,
  TextField,
  Grid,
  Button,
} from '@mui/material';
import HomeButton from '../Components/HomeButton';
import theme from './theme.ts';
import { ThemeProvider } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import { CssBaseline, AppBar, Toolbar, IconButton } from '@mui/material';

// 등록일/수정일 시분초로 변경
const formatDate = (isoString) => {
  if (!isoString) return '';
  const date = new Date(isoString);
  return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 ${date.getHours()}시 ${date.getMinutes()}분`;
};

function BookDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/books/${id}`)
      .then((res) => setBook(res.data))
      .catch((err) => console.error('도서 불러오기 실패:', err));
  }, [id]);

  if (!book) return <div>불러오는 중...</div>;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" sx={{ backgroundColor: '#F7DADB', boxShadow: 0 }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={() => navigate('/')}>
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" sx={{ color: '#333' }}>
            작가의 산책
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" sx={{ mt: 5 }}>
        
        <Typography variant="h5" align="center" sx={{ fontWeight: 'bold', mb: 4, textDecoration: 'underline' }}>
          정보 조회
        </Typography>

        <Box component="form" noValidate autoComplete="off" sx={{ mt: 3 }}>
          <TextField
            label="제목"
            value={book.title}
            fullWidth
            margin="normal"
            InputProps={{ readOnly: true }}
          />
          <TextField
            label="내용"
            value={book.content}
            fullWidth
            margin="normal"
            multiline
            rows={5}
            inputProps={{ readOnly: true }}
          />
          <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
            <TextField
              label="등록일"
              value={formatDate(book.createdAt)}
              fullWidth
              inputProps={{ readOnly: true }}
            />
            <TextField
              label="수정일"
              value={formatDate(book.updatedAt)}
              fullWidth
              inputProps={{ readOnly: true }}
            />
          </Box>

          <Box mt={3} display="flex" justifyContent="space-between">
            <Button variant="outlined" onClick={() => navigate(`/update/${id}`)} sx={{color:'black'}}>
              정보 수정
            </Button>
            <Button variant="outlined" color="error" onClick={() => navigate('/')} >
              취소
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default BookDetail;
