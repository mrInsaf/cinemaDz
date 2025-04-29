import React from 'react';
import { Layout, Menu, Avatar, Card, List, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './UserPage.css';

const { Header, Content } = Layout;
const { Text } = Typography;

const UserPage = () => {
  return (
    <Layout className="user-page-layout">
      <Header className="user-page-header">
        <div className="user-page-header-left">
          <a href="/">Главная</a>
          <a href="/movies">Фильмы</a>
        </div>
        <div className="user-page-header-right">
          <Avatar size="large" icon={<UserOutlined />} />
          <div className="user-page-header-userinfo">
            <Text strong>Ксения Ц.</Text>
            <Text>Критик</Text>
          </div>
        </div>
      </Header>
      <Content className="user-page-content">
        <Card title="Обо мне" className="user-page-about">
          <p>Имя: Ксения Цыгулева</p>
          <p>Почта: example@mail.ru</p>
          <p>Роль: критик</p>
          <p>Любимые жанры: драма, боевик, фантастика</p>
        </Card>
        <Card title="Сохраненные фильмы" className="user-page-saved-movies">
          <List
            grid={{ gutter: 16, column: 3 }}
            dataSource={[
              { title: '«Дюна: Часть вторая»', year: 2024 },
              { title: '«Дюна: Часть вторая»', year: 2024 },
              { title: '«Дюна: Часть вторая»', year: 2024 },
            ]}
            renderItem={item => (
              <List.Item>
                <Card className="user-page-saved-movie"
                  title={
                    <>
                      {item.title}
                      <br />
                      <span style={{ fontWeight: 'normal' }}>{item.year}</span>
                    </>
                  }
                  style={{ height: '200px', backgroundColor: '#9999' , color: 'white'}}
                >
                </Card>
              </List.Item>
            )}
          />
        </Card>
      </Content>
    </Layout>
  );
};

export default UserPage;
