import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { useRouter } from 'expo-router';
import CourseCard from '../components/CourseCard';
import { courses } from '../data/courses';

export default function CourseListScreen() {
  const router = useRouter();
  const [selectedDay, setSelectedDay] = useState('Tümü');

  const days = ['Tümü', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma'];

  const filteredCourses =
    selectedDay === 'Tümü'
      ? courses
      : courses.filter((c) => c.day === selectedDay);

  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.termTitle}>2026-2027 Güz Dönemi</Text>
      <Text style={styles.mainTitle}>Ders Programım</Text>

      {/* Day Filter Pills */}
      <View style={styles.pillsRow}>
        {days.map((day) => (
          <TouchableOpacity
            key={day}
            style={[
              styles.pill,
              selectedDay === day ? styles.pillActive : styles.pillInactive,
            ]}
            onPress={() => setSelectedDay(day)}
            activeOpacity={0.7}
          >
            <Text
              style={[
                styles.pillText,
                selectedDay === day
                  ? styles.pillTextActive
                  : styles.pillTextInactive,
              ]}
            >
              {day}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Test Shortcut */}
      <TouchableOpacity
        style={styles.errorButton}
        activeOpacity={0.8}
        onPress={() => router.push('/ders/d999')}
      >
        <Text style={styles.errorButtonText}>
          ⚠️ Hatalı Ders ID Testi (/ders/d999)
        </Text>
      </TouchableOpacity>

      <Text style={styles.counterText}>
        {selectedDay === 'Tümü'
          ? `Toplam ${courses.length} Ders Kayıtlı`
          : `${selectedDay} Günü (${filteredCourses.length} Ders)`}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0F766E" />
      <FlatList
        data={filteredCourses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CourseCard course={item} />}
        ListHeaderComponent={renderHeader}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  header: {
    paddingVertical: 16,
  },
  termTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#0F766E',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  mainTitle: {
    fontSize: 26,
    fontWeight: '900',
    color: '#0F172A',
    marginBottom: 14,
  },
  pillsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 16,
  },
  pill: {
    paddingHorizontal: 13,
    paddingVertical: 7,
    borderRadius: 20,
    borderWidth: 1,
  },
  pillActive: {
    backgroundColor: '#0F766E',
    borderColor: '#0F766E',
  },
  pillInactive: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E2E8F0',
  },
  pillText: {
    fontSize: 13,
    fontWeight: '600',
  },
  pillTextActive: {
    color: '#FFFFFF',
  },
  pillTextInactive: {
    color: '#475569',
  },
  errorButton: {
    backgroundColor: '#FEF3C7',
    borderWidth: 1,
    borderColor: '#F59E0B',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 14,
  },
  errorButtonText: {
    color: '#B45309',
    fontSize: 12,
    fontWeight: '700',
  },
  counterText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#475569',
  },
});
