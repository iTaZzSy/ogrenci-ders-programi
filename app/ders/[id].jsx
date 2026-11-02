import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { courses } from '../../data/courses';

export default function CourseDetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const course = courses.find((c) => c.id === id);

  // Error handling: if course not found
  if (!course) {
    return (
      <SafeAreaView style={styles.errorContainer}>
        <View style={styles.errorCard}>
          <Text style={styles.errorIcon}>📚</Text>
          <Text style={styles.errorTitle}>Ders Bulunamadı!</Text>
          <Text style={styles.errorMessage}>
            "{id}" kodlu ders programınızda bulunamadı veya silinmiş.
          </Text>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
            activeOpacity={0.8}
          >
            <Text style={styles.backButtonText}>← Ders Programına Dön</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Course Card */}
        <View style={[styles.mainCard, { borderTopColor: course.color || '#0F766E' }]}>
          <View style={styles.headerRow}>
            <View style={[styles.codeTag, { backgroundColor: course.color || '#0F766E' }]}>
              <Text style={styles.codeText}>{course.code}</Text>
            </View>
            <Text style={styles.creditsTag}>{course.credits} Kredi / AKTS</Text>
          </View>

          <Text style={styles.courseTitle}>{course.name}</Text>

          <View style={styles.divider} />

          {/* Schedule Info Box */}
          <View style={styles.scheduleBox}>
            <View style={styles.scheduleItem}>
              <Text style={styles.scheduleLabel}>📅 Ders Günü</Text>
              <Text style={styles.scheduleValue}>{course.day}</Text>
            </View>
            <View style={styles.scheduleItem}>
              <Text style={styles.scheduleLabel}>⏰ Ders Saati</Text>
              <Text style={styles.scheduleValue}>{course.time}</Text>
            </View>
            <View style={styles.scheduleItem}>
              <Text style={styles.scheduleLabel}>📍 Derslik / Lab</Text>
              <Text style={styles.scheduleValue}>{course.classroom}</Text>
            </View>
          </View>

          {/* Instructor Box */}
          <View style={styles.instructorBox}>
            <Text style={styles.instructorIcon}>👨‍🏫</Text>
            <View>
              <Text style={styles.instructorLabel}>Öğretim Elemanı</Text>
              <Text style={styles.instructorName}>{course.instructor}</Text>
            </View>
          </View>

          {/* Course Description */}
          <View style={styles.descSection}>
            <Text style={styles.descTitle}>Ders Hakkında & İçerik:</Text>
            <Text style={styles.descText}>{course.description}</Text>
          </View>
        </View>

        {/* Back Button */}
        <TouchableOpacity
          style={styles.backButtonLarge}
          activeOpacity={0.8}
          onPress={() => router.back()}
        >
          <Text style={styles.backButtonLargeText}>← Programa Geri Dön</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 40,
  },
  mainCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 20,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderTopWidth: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
    marginBottom: 20,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  codeTag: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  codeText: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 12,
  },
  creditsTag: {
    fontSize: 12,
    fontWeight: '700',
    color: '#64748B',
    backgroundColor: '#F1F5F9',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  courseTitle: {
    fontSize: 24,
    fontWeight: '900',
    color: '#0F172A',
    marginBottom: 8,
  },
  divider: {
    height: 1,
    backgroundColor: '#F1F5F9',
    marginVertical: 14,
  },
  scheduleBox: {
    backgroundColor: '#F8FAFC',
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 16,
    gap: 10,
  },
  scheduleItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  scheduleLabel: {
    fontSize: 13,
    color: '#64748B',
    fontWeight: '600',
  },
  scheduleValue: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0F172A',
  },
  instructorBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ECFDF5',
    borderWidth: 1,
    borderColor: '#A7F3D0',
    borderRadius: 14,
    padding: 14,
    marginBottom: 16,
  },
  instructorIcon: {
    fontSize: 30,
    marginRight: 12,
  },
  instructorLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: '#065F46',
  },
  instructorName: {
    fontSize: 15,
    fontWeight: '800',
    color: '#064E3B',
  },
  descSection: {
    paddingTop: 6,
  },
  descTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#475569',
    marginBottom: 6,
  },
  descText: {
    fontSize: 14,
    color: '#334155',
    lineHeight: 22,
  },
  backButtonLarge: {
    backgroundColor: '#0F766E',
    paddingVertical: 15,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButtonLargeText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
  errorContainer: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 24,
    alignItems: 'center',
    width: '100%',
    maxWidth: 380,
    borderWidth: 1,
    borderColor: '#FEE2E2',
    shadowColor: '#DC2626',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  errorIcon: {
    fontSize: 50,
    marginBottom: 10,
  },
  errorTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#DC2626',
    marginBottom: 8,
  },
  errorMessage: {
    fontSize: 14,
    color: '#64748B',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 20,
  },
  backButton: {
    backgroundColor: '#0F766E',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
  },
  backButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
});
